#{fact rule=code-injection@v1.0 defects=1}

from typing import List, Set, Dict, Tuple, Optional, get_type_hints

class C:
    member: int = 0

def smth(payload):
  # ruleid: dangerous-annotations-usage
  C.__annotations__["member"] = payload
  get_type_hints(C)


#{/fact}
