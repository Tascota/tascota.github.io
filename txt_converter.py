file_name = input()
origin = open(file_name, "r", encoding="utf-8")


def convert(org, name):
    name_new = "new_" + name
    file = open(name_new, "w", encoding="utf-8")
    li_count = 0

    lines = org.readlines()
    for line in lines:
        if line == "\n":
            if li_count != 0:
                line_new = "</ul>\n<br>\n"
            else:
                line_new = "<br>\n"
            li_count = 0
        elif "	⁃	" in line:
            line_new = line.replace("	⁃	", "")
            line_new = line_new.replace("\n", "")
            if li_count == 0:
                line_new = "<ul>\n" + "<li>" + line_new + "</li>" + "\n"
            else:
                line_new = "<li>" + line_new + "</li>" + "\n"
            li_count += 1
        else:
            line_new = line.replace("\n", "")
            if li_count != 0:
                line_new = "</ul>\n" + "<p>" + line_new + "</p>" + "\n"
            else:
                line_new = "<p>" + line_new + "</p>" + "\n"
            li_count = 0
        print(line_new, li_count)
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
