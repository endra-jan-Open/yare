#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    char filename[] = "main";
    char project[] = "yare";

    printf("Project: %s, File: %s\n", project, filename);

    FILE *fp = fopen(filename, "r");
    if (fp == NULL) {
        perror("Cannot open file");
        return 1;
    }

    char line[256];
    while(fgets(line, sizeof(line), fp)) {
        printf("%s", line);
    }
    fclose(fp);

    return 0;
}

# Additional Implementation 1760850893

# Code Update 1760850893-18652

# Code Update 1760850893-20716

# Additional Implementation 1760850893

# Code Update 1760850893-1060
