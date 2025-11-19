using System.IO;
using System.IO.Compression;

class ZipSlipBad
{
    //{fact rule=path-traversal@v1.0 defects=1}
    public static void WriteToDirectory(ZipArchiveEntry entry,
                                        string destDirectory)
    {
        string destFileName = Path.Combine(destDirectory, entry.FullName);
        entry.ExtractToFile(destFileName);
    }
    //{/fact}
}
