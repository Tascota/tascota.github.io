file_name = input()
origin = open(file_name, "r", encoding="utf-8")


def convert(org, name):
    name_new = "new_" + name
    file = open(name_new, "w", encoding="utf-8")

    lines = org.readlines()
    for line in lines:
        if line == "\n":
            line_new = "<br>\n"
        else:
            line_new = line.replace("\n", "")
            line_new = "<p>" + line_new + "</p>" + "\n"
        print(line_new)
        file.write(line_new)


while True:
    convert(origin, file_name)

    file_name = ""
    origin = ""

    whether_continue = input("Continue(y)?")
    if whether_continue == "y":
        file_name = input()
        origin = open(file_name, "r", encoding="utf-8")
        continue
    else:
        break
