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

# Additional Implementation 1760850892

# Additional Implementation 1760850892

# Additional Implementation 1760850893

# Additional Implementation 1760850893

# Additional Implementation 1760850893

# Additional Implementation 1760850893

# Additional Implementation 1760850893

# Code Update 1760850893-10949

# Code Update 1760850893-25034

# Code Update 1760850893-31778

# Additional Implementation 1760850893

# Code Update 1760850894-5297

# Additional Implementation 1760850894

# Additional Implementation 1760850894

# Additional Implementation 1760850894

# Additional Implementation 1760850894

# Additional Implementation 1760850894

# Additional Implementation 1760850894

# Code Update 1760850894-10214

# Additional Implementation 1760850894

# Additional Implementation 1760850895

# Code Update 1760850895-14600

# Additional Implementation 1760850895

# Additional Implementation 1760850895

# Additional Implementation 1760850895

# Code Update 1760850895-23681

# Additional Implementation 1760850895

# Additional Implementation 1760850895

# Additional Implementation 1760850895

# Code Update 1760850896-18182

# Additional Implementation 1760850896

# Code Update 1760850896-5841

# Additional Implementation 1760850896

# Additional Implementation 1760850896

# Additional Implementation 1760850896

# Additional Implementation 1760850896

# Additional Implementation 1760850896

# Additional Implementation 1760850896

# Additional Implementation 1760850896

# Code Update 1760850896-50

# Additional Implementation 1760850896

# Additional Implementation 1760850896

# Code Update 1760850896-3850

# Additional Implementation 1760850897

# Additional Implementation 1760850897

# Additional Implementation 1760850897

# Additional Implementation 1760850897

# Additional Implementation 1760850897

# Code Update 1760850897-29629

# Code Update 1760850897-14380

# Additional Implementation 1760850897

# Code Update 1760850897-1933

# Additional Implementation 1760850897

# Additional Implementation 1760850898

# Additional Implementation 1760850898

# Additional Implementation 1760850898

# Additional Implementation 1760850898

# Code Update 1760850898-17380

# Code Update 1760850898-30090

# Code Update 1760850898-2610
