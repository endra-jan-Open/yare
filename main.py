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

# Additional Implementation 1760850893

# Additional Implementation 1760850893

# Additional Implementation 1760850893

# Additional Implementation 1760850893

# Additional Implementation 1760850893

# Additional Implementation 1760850894

# Code Update 1760850894-19355

# Code Update 1760850894-6171

# Code Update 1760850894-3

# Code Update 1760850894-10414

# Code Update 1760850894-3420

# Additional Implementation 1760850894

# Additional Implementation 1760850894

# Additional Implementation 1760850894

# Additional Implementation 1760850894

# Code Update 1760850895-27802

# Code Update 1760850895-31614

# Code Update 1760850895-2836

# Code Update 1760850895-28723
