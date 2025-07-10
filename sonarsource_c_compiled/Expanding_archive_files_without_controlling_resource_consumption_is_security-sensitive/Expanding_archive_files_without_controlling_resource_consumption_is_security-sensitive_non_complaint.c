#include "archive.h"


struct archive *archive_read_new(void)
{
 
}
 
struct archive *archive_write_disk_new(void)
{
 
}
 
int archive_write_disk_set_options(struct archive *a, int flags)
{
 
}
 
int archive_read_support_format_tar(struct archive *a)
{
 
}
 
int archive_read_open_filename(struct archive *a, const char *filename, size_t block_size)
{
 
}
 
int archive_read_next_header(struct archive *a, struct archive_entry **entry)
{
 
}
 
int archive_read_close(struct archive *a)
{
 
}
 
int archive_read_free(struct archive *a)
{
 
}
 
int archive_write_close(struct archive *a){
 
}
 
int archive_write_free(struct archive *a){
 
}

// ...
// {fact rule=denial-of-service@v1.0 defects=1}
void f1(const char *filename, int flags) {
  struct archive_entry *entry;
  struct archive *a = archive_read_new();
  struct archive *ext = archive_write_disk_new();
  archive_write_disk_set_options(ext, flags);
  archive_read_support_format_tar(a);

  if ((archive_read_open_filename(a, filename, 10240))) {
    return;
  }

  for (;;) {
    int r = archive_read_next_header(a, &entry);
    if (r == ARCHIVE_EOF) {
      break;
    }
    if (r != ARCHIVE_OK) {
      return;
    }
  }
  archive_read_close(a);
  archive_read_free(a);

  archive_write_close(ext);
  archive_write_free(ext);
}
// {/fact}