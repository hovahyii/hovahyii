import json, datetime, re
def load(p):
    with open(p, encoding='utf-8') as f:
        return json.load(f)['respData']['chatInfo']
def ts(ms):
    return datetime.datetime.utcfromtimestamp(ms/1000).strftime('%Y-%m-%d %H:%M')
msgs = load('E:/hovahyii/.agent-work/s-19949f13/group_hist.txt') + load('E:/hovahyii/.agent-work/s-19949f13/group_hist2.txt')
msgs.sort(key=lambda m: m['serverSendTime'])
for m in msgs:
    t = m.get('contentType')
    c = m.get('content', '')
    if t == 'PICTURE_MSG':
        c = '[IMG]'
    elif t == 'IMAGESPAN_MSG':
        c = re.sub(r'/:um_begin\{.*?\}/:um_end', '[IMG]', c, flags=re.S)
    if t == 'CARD_MSG':
        c = '[CARD]'
    print(f"{ts(m['serverSendTime'])} | {m['sender']} | {t} | {c.strip()[:280]}")
print('TOTAL:', len(msgs))