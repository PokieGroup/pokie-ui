import React, { ReactElement } from 'react';

interface Props {
  onClick: () => void;
}

export default function Button({ onClick }: Props): ReactElement {
  return (
    <div>
      <button onClick={onClick} type="button">
        MY BUTTON
      </button>
    </div>
  );
}
