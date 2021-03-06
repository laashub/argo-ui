import * as React from 'react';
import { DropDown } from './dropdown/dropdown';

export interface MenuItem {
    title: string | React.ReactElement;
    iconClassName?: string;
    action: () => any;
}

export interface DropDownMenuProps {
    items: MenuItem[];
    anchor: React.ComponentType;
}

export class DropDownMenu extends React.PureComponent<DropDownMenuProps> {

    private dropdown: DropDown;

    public render() {
        return (
            <DropDown anchor={this.props.anchor} isMenu={true} ref={(dropdown: any) => this.dropdown = dropdown}>
                <ul>
                    {this.props.items.map((item, i) => <li
                        onClick={(event) => this.onItemClick(item, event)} key={i}>
                        {item.iconClassName && <i className={item.iconClassName}/>} {item.title}
                        </li>)}
                </ul>
            </DropDown>
        );
    }

    private onItemClick(item: MenuItem, event: any) {
        item.action();
        event.stopPropagation();
        if (this.dropdown) {
            this.dropdown.close();
        }
    }
}
