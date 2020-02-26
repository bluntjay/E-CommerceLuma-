import React from "react";
import { Dropdown } from 'react-bootstrap';

export default function ChooseSize(){
	return(
		<Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Choose Size
      </Dropdown.Toggle>
      <Dropdown.Menu>
          <Dropdown.Item>Small</Dropdown.Item>
          <Dropdown.Item>Medium</Dropdown.Item>
          <Dropdown.Item>Large</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
		)
}
