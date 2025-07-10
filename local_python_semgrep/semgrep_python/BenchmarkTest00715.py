#{ex-fact rule=path-traversal@v1.0 defects=1}

# import re, os
# from django.http import HttpResponse
# from somewhere import APIView

# class GenerateUserAPI(APIView):
#     def get(self, request):
#         """
#         download users excel
#         """
#         # ruleid: path-traversal-open
#         file_id = request.GET.get("file_id")
#         if not file_id:
#             return self.error("Invalid Parameter, file_id is required")
#         if not re.match(r"^[a-zA-Z0-9]+$", file_id):
#             return self.error("Illegal file_id")
#         file_path = f"/tmp/{file_id}.xlsx"
#         if not os.path.isfile(file_path):
#             return self.error("File does not exist")
#         with open(file_path, "rb") as f:
#             raw_data = f.read()
#         os.remove(file_path)
#         response = HttpResponse(raw_data)
#         response["Content-Disposition"] = f"attachment; filename=users.xlsx"
#         response["Content-Type"] = "application/xlsx"
#         return response

#{/ex-fact}
