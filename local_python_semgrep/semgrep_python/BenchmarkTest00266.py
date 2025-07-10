#{fact rule=code-injection@v1.0 defects=0}

from typing import List, Set, Dict, Tuple, Optional, get_type_hints

class C:
    member: int = 0

def ok1():
  # ok: dangerous-annotations-usage
  C.__annotations__["member"] = int
  get_type_hints(C)

#{/fact}
