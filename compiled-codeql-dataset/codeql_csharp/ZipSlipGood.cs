using System.IO;
using System.IO.Compression;

class ZipSlipGood
{
    //{fact rule=path-traversal@v1.0 defects=0}
    public static void WriteToDirectory(ZipArchiveEntry entry,
                                        string destDirectory)
    {
        string destFileName = Path.GetFullPath(Path.Combine(destDirectory, entry.FullName));
        string fullDestDirPath = Path.GetFullPath(destDirectory + Path.DirectorySeparatorChar);
        if (!destFileName.StartsWith(fullDestDirPath)) {
            throw new System.InvalidOperationException("Entry is outside the target dir: " +
                                                                                 destFileName);
        }
        entry.ExtractToFile(destFileName);
    }
    //{/fact}
}
