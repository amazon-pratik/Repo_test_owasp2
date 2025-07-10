import { useState } from "react";
import styled from "styled-components";

const PolicyColumn = ({
  group,
  deck,
}) => {
  const [actionsExpanded, setActionsExpanded] = useState<boolean>(false);
  const [columnRef, setColumnRef] = useState<HTMLElement | null>(null);
  return (
      // {fact rule=cwe-no-maifest-id@v1.0 defects=1}
    <ColumnContainer>
      <ColumnHeader>
        <Button
          small
          minimal
          onClick={() => {
            // ruleid:calling-set-state-on-current-state
            setActionsExpanded(actionsExpanded);
          }}
          intent={actionsExpanded ? Intent.PRIMARY : Intent.NONE}
        >
          <FontAwesomeIcon icon={faBell} />
        </Button>
        <Button
            // {/fact}

            // {fact rule=cwe-no-maifest-id@v1.0 defects=1}
          small
          minimal
          onClick={() => {
            // ok
            setActionsExpanded(!actionsExpanded);
          }}
          intent={actionsExpanded ? Intent.PRIMARY : Intent.NONE}
        >
          <FontAwesomeIcon icon={faBell} />
        </Button>
      </ColumnHeader>
    </ColumnContainer>
      // {/fact}
  );
};

export default PolicyColumn;
