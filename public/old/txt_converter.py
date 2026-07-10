file_name = input("File name:")
origin = open(file_name, "r", encoding="utf-8")
mode = input("Choose a mode [n(nbr)/c(c3)]:")


def convert(org, name, mode):
    name_new = "new_" + name
    file = open(name_new, "w", encoding="utf-8")
    li_count = 0

    lines = org.readlines()
    for line in lines:
        if line == "\n":
            if mode == "nbr":
                line_new = ""
            elif li_count != 0:
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


def convertConlang(org, name, mkde):
    name_new = "new_" + name
    file = open(name_new, "w", encoding="utf-8")
    count = 0

    lines = org.readlines()
    for line in lines:
        if line == "\n":
            line_new = ""
            print(line_new, count)
            file.write(line_new)
            continue
        
        line_new = line.replace("\n", "")

        if lines.index(line) == 0 or count == 0:
            line_new = "<div class=\"paragraph\">\n    <p class=\"original\">" + line_new + "</p>\n"
            count = 1
        elif count == 1:
            if mode == "c":
                line_new = "    <p class=\"translation\">" + line_new + "</p>\n</div>\n\n"
                count = 0
            else:
                line_new = "    <p class=\"translation\">" + line_new + "</p>\n"  
                count += 1
        elif count == 2:
            line_new = "    <p class=\"ref-translation\">" + line_new + "</p>\n</div>\n\n"
            count = 0
        
        print(line_new, count)
        file.write(line_new)

while True:
    if mode == ("c" or "c3"):
        convertConlang(origin, file_name, mode)
    else:
        convert(origin, file_name, mode)

    mode = ""
    file_name = ""
    origin = ""

    whether_continue = input("Continue(y)?")
    if whether_continue == "y":
        file_name = input("File name:")
        origin = open(file_name, "r", encoding="utf-8")
        mode = input("Choose a mode [n(nbr)/c(c3)]:")
        continue
    else:
        break
