import argparse

from alphabet import alphabet

parser = argparse.ArgumentParser(description="A script that decode and encode punched card.")
parser.add_argument('--message', type=str, help="Example message.")
parser.add_argument('--path', type=str, help="./example/path.txt")
args = parser.parse_args()

def decode(path):
    with open(path, 'r') as file:
        lines = file.readlines()

    matrix = []
    for line in lines:
        matrix.append(list(line.strip()))

    num_rows = len(matrix)
    num_cols = len(matrix[0])
    
    print(num_rows)
    print(num_cols)
    # for col in range(num_cols):
    #     key = ""
    #     for row in range(num_rows):
    #         if matrix[row][col] == "#":
    #             key += str(row)
    #     print(key)

def encode(message):
    print("Encode")

if args.message:
    encode(args.message)
elif args.path:
    decode(args.path)
else:
    print("No valid flag provided.")
