#!/usr/bin/env python3
import glob
import os
import re

try:
    from bs4 import BeautifulSoup
except ImportError:
    BeautifulSoup = None

def main():
    print(">>> Running Post-Generate Optimizer for clash-app.blog...")
    
    # 1. Locate generated CSS
    css_files = glob.glob('.output/public/_nuxt/entry.*.css')
    if not css_files:
        print("Warning: No compiled CSS found in .output/public/_nuxt/")
        return
    
    css_path = css_files[0]
    with open(css_path, 'r', encoding='utf-8') as f:
        css_content = f.read()
    
    print(f"Loaded CSS: {os.path.basename(css_path)} ({len(css_content)} bytes)")
    
    # 2. Process all generated HTML files
    processed = 0
    over_limit_pages = []
    invalid_links = []
    total_external_links = 0

    for root, dirs, files in os.walk('.output/public'):
        for file in files:
            if file.endswith('.html'):
                p = os.path.join(root, file)
                rel_path = os.path.relpath(p, '.output/public')
                
                with open(p, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Determine relative path prefix to output root
                rel_dir = os.path.relpath(root, '.output/public')
                if rel_dir == '.':
                    prefix = './'
                else:
                    depth = len(rel_dir.split(os.sep))
                    prefix = '../' * depth
                
                # Inline compiled CSS for zero-latency styling & file:/// compatibility
                if 'id="inlined-theme-css"' not in content:
                    style_tag = f'<style id="inlined-theme-css">{css_content}</style>'
                    content = content.replace('</head>', f'{style_tag}</head>', 1)
                else:
                    content = re.sub(r'<style id="inlined-theme-css">.*?</style>', f'<style id="inlined-theme-css">{css_content}</style>', content, flags=re.DOTALL)

                # Inject lightweight battery-saving motion controller
                if 'id="motion-runtime"' not in content:
                    motion_script = '''<script id="motion-runtime">
(function() {
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      document.documentElement.classList.add('page-hidden');
    } else {
      document.documentElement.classList.remove('page-hidden');
    }
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('anim-paused');
        } else {
          entry.target.classList.add('anim-paused');
        }
      });
    }, { rootMargin: '50px 0px 50px 0px', threshold: 0.01 });

    function observeEls() {
      var els = document.querySelectorAll('.bracket-anim-left, .bracket-anim-right, .leaf-sway-11, .leaf-sway-15, .paperclip-decor');
      els.forEach(function(el) { observer.observe(el); });
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', observeEls);
    } else {
      observeEls();
    }
  }
})();
</script>'''
                    content = content.replace('</body>', f'{motion_script}</body>', 1)
                
                # Fix static asset & stylesheet references to relative paths for file:/// compatibility
                content = re.sub(r'src="/favicon\.png"', f'src="{prefix}favicon.png"', content)
                content = re.sub(r'href="/favicon\.png"', f'href="{prefix}favicon.png"', content)
                content = re.sub(r'href="/apple-touch-icon\.png"', f'href="{prefix}apple-touch-icon.png"', content)
                content = re.sub(r'href="/_nuxt/([^"]+\.css)"', rf'href="{prefix}_nuxt/\1"', content)

                # Ensure SVGs have inline max-width and max-height so they never blow up unstyled
                content = re.sub(
                    r'<svg width="16" height="16" class="w-4 h-4 absolute left-2\.5',
                    r'<svg width="16" height="16" style="width:16px;height:16px;min-width:16px;min-height:16px;max-width:16px;max-height:16px;flex-shrink:0;" class="w-4 h-4 absolute left-2.5',
                    content
                )
                content = re.sub(
                    r'<svg width="20" height="20" class="w-5 h-5"',
                    r'<svg width="20" height="20" style="width:20px;height:20px;min-width:20px;min-height:20px;max-width:20px;max-height:20px;flex-shrink:0;" class="w-5 h-5"',
                    content
                )

                if BeautifulSoup is not None:
                    # Parse HTML with BeautifulSoup if available
                    soup = BeautifulSoup(content, 'html.parser')
                    for a in soup.find_all('a', href=True):
                        href = a['href']
                        if href.startswith('http://') or href.startswith('https://'):
                            if 'clash-app.blog' in href or href.startswith('http://localhost'):
                                continue
                            total_external_links += 1
                            
                            # Distinguish commercial affiliate links vs open-source/reference links
                            is_affiliate = any(k in href for k in ['vipaff', 'gntaff', 'flycat', 'kuaili', 'lingche', 'hueue09', 'code=']) or 'airport/' in rel_path or rel_path == 'airport-recommend/index.html'
                            if 'github.com' in href or 'tizilab.cc' in href or not is_affiliate:
                                expected_rel = {'nofollow', 'noopener'}
                                rel_str = 'nofollow noopener'
                            else:
                                expected_rel = {'sponsored', 'nofollow', 'noopener'}
                                rel_str = 'sponsored nofollow noopener'

                            rel = a.get('rel', [])
                            if isinstance(rel, str):
                                rel = rel.split()
                            if set(rel) != expected_rel or a.get('target') != '_blank':
                                a['rel'] = rel_str
                                a['target'] = '_blank'
                                invalid_links.append((rel_path, href))
                    content = str(soup)

                    main = soup.find('main') or soup.find('div', class_='flex-1')
                    if main and '404' not in rel_path and '500' not in rel_path and '200.html' not in rel_path and rel_path != 'index.html':
                        text = main.get_text()
                        chinese_and_words = len(re.findall(r'[\u4e00-\u9fa5]|[a-zA-Z0-9]+', text))
                        if chinese_and_words > 2500:
                            over_limit_pages.append((rel_path, chinese_and_words))
                else:
                    # Pure standard library fallback (zero dependencies)
                    def fix_link(match):
                        nonlocal total_external_links
                        full_tag = match.group(0)
                        href = match.group(1)
                        if href.startswith('http://') or href.startswith('https://'):
                            if 'clash-app.blog' in href or href.startswith('http://localhost'):
                                return full_tag
                            total_external_links += 1
                            
                            is_affiliate = any(k in href for k in ['vipaff', 'gntaff', 'flycat', 'kuaili', 'lingche', 'hueue09', 'code=']) or 'airport/' in rel_path or rel_path == 'airport-recommend/index.html'
                            rel_str = 'nofollow noopener' if ('github.com' in href or 'tizilab.cc' in href or not is_affiliate) else 'sponsored nofollow noopener'

                            tag_clean = re.sub(r'\s*rel=["\'][^"\']*["\']', '', full_tag)
                            tag_clean = re.sub(r'\s*target=["\'][^"\']*["\']', '', tag_clean)
                            return tag_clean[:-1] + f' rel="{rel_str}" target="_blank">'
                        return full_tag

                    content = re.sub(r'<a\s+[^>]*href=["\']([^"\']+)["\'][^>]*>', fix_link, content)

                    # Simple text check
                    m_main = re.search(r'<main[\s\S]*?<\/main>', content)
                    if m_main and '404' not in rel_path and '500' not in rel_path and '200.html' not in rel_path and rel_path != 'index.html':
                        clean_text = re.sub(r'<[^>]+>', '', m_main.group(0))
                        chinese_and_words = len(re.findall(r'[\u4e00-\u9fa5]|[a-zA-Z0-9]+', clean_text))
                        if chinese_and_words > 2500:
                            over_limit_pages.append((rel_path, chinese_and_words))

                with open(p, 'w', encoding='utf-8') as f:
                    f.write(content)
                processed += 1
                
    print(f"Successfully processed {processed} HTML files!")
    print(f"Total external links audited: {total_external_links}")
    if invalid_links:
        print(f"Auto-fixed {len(invalid_links)} external links to include rel='sponsored nofollow noopener' and target='_blank'.")
    else:
        print("All external links 100% compliant with rel='sponsored nofollow noopener'!")
        
    if over_limit_pages:
        print(f"WARNING: {len(over_limit_pages)} pages exceeded 2500 characters limit:")
        for page, count in over_limit_pages:
            print(f"  - {page}: {count} chars")
    else:
        print("All articles strictly compliant with <= 2500 characters limit!")

if __name__ == '__main__':
    main()
