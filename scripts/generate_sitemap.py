import json

with open('data/raw_parsed_reviews.json', 'r', encoding='utf-8') as f:
    airports = json.load(f)

core_routes = [
    ('/', '1.0', 'daily'),
    ('/download', '1.0', 'daily'),
    ('/first-run', '1.0', 'daily'),
    ('/profiles', '0.8', 'daily'),
    ('/subscriptions', '0.8', 'daily'),
    ('/proxies', '0.8', 'daily'),
    ('/routing', '0.8', 'daily'),
    ('/tun-mode', '0.8', 'daily'),
    ('/dns-settings', '0.8', 'daily'),
    ('/app-errors', '0.9', 'daily'),
    ('/windows', '0.9', 'daily'),
    ('/mac', '0.9', 'daily'),
    ('/android', '0.9', 'daily'),
    ('/iphone', '0.9', 'daily'),
    ('/linux', '0.8', 'daily'),
    ('/airport-recommend', '1.0', 'daily'),
    ('/faq', '0.8', 'weekly'),
    ('/about', '0.6', 'weekly'),
    ('/projects', '0.7', 'weekly'),
    ('/meta-core', '0.8', 'weekly'),
    ('/verge-rev', '0.9', 'daily'),
    ('/web-panel', '0.7', 'weekly'),
    ('/system-proxy', '0.8', 'weekly'),
    ('/backup-update', '0.7', 'weekly'),
    ('/network-intro', '0.9', 'daily')
]

xml = ['<?xml version="1.0" encoding="UTF-8"?>']
xml.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

for route, pri, freq in core_routes:
    xml.append('  <url>')
    xml.append(f'    <loc>https://clash-app.blog{route}</loc>')
    xml.append('    <lastmod>2026-11-24</lastmod>')
    xml.append(f'    <changefreq>{freq}</changefreq>')
    xml.append(f'    <priority>{pri}</priority>')
    xml.append('  </url>')

for a in airports:
    aid = a['id']
    xml.append('  <url>')
    xml.append(f'    <loc>https://clash-app.blog/airport/{aid}</loc>')
    xml.append('    <lastmod>2026-11-24</lastmod>')
    xml.append('    <changefreq>weekly</changefreq>')
    xml.append('    <priority>0.8</priority>')
    xml.append('  </url>')

xml.append('</urlset>')

with open('public/sitemap.xml', 'w', encoding='utf-8') as f:
    f.write('\n'.join(xml))

print(f"Generated public/sitemap.xml with {len(core_routes) + len(airports)} URLs!")
