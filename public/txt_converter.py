import os

base = os.path.dirname(os.path.abspath(__file__))


def convert(org, name):
    name_new = os.path.join(base, "new_" + name)
    with open(name_new, "w", encoding="utf-8") as file:
        for line in org:
            if line == "\n":
                line_new = "<br>\n\n"
            else:
                line_new = line + "\n"
            file.write(line_new)


while True:
    file_name = input("File name:")
    with open(os.path.join(base, file_name), "r", encoding="utf-8") as origin:
        convert(origin, file_name)

    if input("Continue(y)?") != "y":
        break
