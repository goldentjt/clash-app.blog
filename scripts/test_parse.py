import re

with open('data/raw_airports_prompt.txt', 'r', encoding='utf-8') as f:
    text = f.read()

sections = re.split(r'\n(?=\d{2}\s+)', text)[1:]
print(f"Total sections: {len(sections)}")

for i, s in enumerate(sections):
    lines = [l.strip() for l in s.strip().split('\n') if l.strip()]
    first = lines[0]
    num = first[:2]
    name = first[3:].strip()
    
    # Extract invite URL
    invite_match = re.search(r'https?://[^\s\)\]]+', s)
    invite_url = invite_match.group(0) if invite_match else ""
    
    # Extract min price
    price_match = re.search(r'(?:最低价格|价格)[：:]\s*([^\n]+)', s)
    price = price_match.group(1).strip() if price_match else "详见结算页"
    
    # Extract selling point
    selling_match = re.search(r'(?:主打卖点|卖点)[：:]\s*([^\n]+(?:\n[^\n]+)?)', s)
    selling = selling_match.group(1).strip() if selling_match else ""
    
    print(f"[{num}] {name} | Price: {price[:30]} | URL: {invite_url[:35]}...")

