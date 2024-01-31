def parse_file(txt_file):
    txt_map = {}
    with open(txt_file, 'r') as file:
        for line in file:
            parts = line.strip().split(' ', 1)
            if len(parts) == 2:
                key, value = parts
                txt_map[int(key)] = value
    return txt_map

txt_file = 'codeTest.txt' 

file_map = parse_file(txt_file)


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