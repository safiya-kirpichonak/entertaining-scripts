import argparse

from alphabet import alphabet


def decode(path):
    """
    Decode a punched card form a file.
    """
    with open(path, 'r') as file:
        lines = file.readlines()

    matrix = []
    for line in lines:
        matrix.append(list(line.strip()))

    num_rows = len(matrix)
    num_cols = len(matrix[0])

    message = ""
    for col in range(num_cols):
        key = ""
        for row in range(num_rows):
            if matrix[row][col] == "#":
                key += str(row)
        message += alphabet[key]

    return message


def encode(message):
    """
    Encode a message to a punched card.
    """
    print("Encode")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="A script that decode and encode punched card.")
    parser.add_argument("-m", "--message", type=str, help="Example message.")
    parser.add_argument("-p", "--path", type=str, help="./example/path.txt")
    args = parser.parse_args()

    if args.message:
        encode(args.message)
    elif args.path:
        print(decode(args.path))
    else:
        print("No valid flag provided.")
