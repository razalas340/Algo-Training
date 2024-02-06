def parse_file(file_text):
    map_text = {}
    with open(file_text, 'r') as file:
        print(file)
        for line in file:
            parts = line.strip().split(' ', 1)
            if len(parts) == 2:
                key, value = parts
                map_text[int(key)] = value
    return map_text
file_text = 'coding_qual_input.txt' 
file_map = parse_file(file_text)

def decode_file(file_map):
    file_map_len = len(file_map)
    count = 1 
    amount = 2
    res = file_map[count]
    count += amount
    amount += 1
    while count <= file_map_len:
        res = res + " " + file_map[count]
        count += amount
        amount += 1
    return res

decoded_string = decode_file(file_map)
print(decoded_string)