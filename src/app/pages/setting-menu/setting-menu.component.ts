import { Component, Inject } from '@angular/core';
import { NavbarItem, NAVIGATIONS } from '../../interfaces';

@Component({
  selector: 'app-setting-menu',
  templateUrl: './setting-menu.component.html',
  styleUrls: ['./setting-menu.component.scss']
})
export class SettingMenuComponent {
  editValue: string | undefined = '';
  isEditBtn = false;

  constructor(
    @Inject(NAVIGATIONS)
    public navigations: NavbarItem[],
  ) {
  }

  /**
   * Handle click on Edit button to show input
   */
  startEdit(item: NavbarItem): void {
    this.editValue = item?.title;
    this.collapse();
    item.isEdit = true;
  }

  /**
   * Handle save value
   */
  saveEdit(item: NavbarItem): void {
    if (!item.title) {
      item.title = this.editValue;
    }
    this.collapse();
    this.isEditBtn = true;
  }

  /**
   * Handle stop edit
   */
  stopEdit(item: NavbarItem) {
    this.collapse();
    if (!this.isEditBtn && !item.newValue) {
      item.title = this.editValue;
    }
    this.isEditBtn = false;
  }

  onCreate(key: string, array = this.navigations) {
    if (!key) {
      array.push({
        key: (array.length + 1).toString(),
        title: 'Menu ' + (array.length + 1),
        url: '/',
        isEdit: true,
        children: [],
      });
    } else {
      array.forEach((item) => {
        this.editValue = 'Menu ' + key + '-' + ((item.children?.length || 0) + 1);
        if (item.key == key) {
          if (!item.children?.length) {
            item.children = [];
          }
          item.children?.push({
            key: key + '-' + (item.children?.length + 1),
            title: 'Menu ' + key + '-' + (item.children?.length + 1),
            url: '/',
            children: [],
          });
          console.log(item);
        } else if (item.children) {
          this.onCreate(key, item.children);
        }
      });
    }
    this.toggle(key, true)
    this.collapse();
  }

  onDelete(key: string, array = this.navigations) {
    array.forEach((item, index) => {
      this.editValue = 'Menu ' + key + '-' + ((item.children?.length || 0) + 1);
      if (item.key == key) {
        array.splice(index, 1);
        return;
      } else if (item.children) {
        this.onDelete(key, item.children);
      }
    });
  }


  collapse(array = this.navigations) {
    array.forEach(nav => {
      nav.isEdit = false;
      if (nav.children) {
        nav.children.forEach(_ => {
          this.collapse(nav.children);
        });
      }
    });
  }

  toggle(key: string, active: boolean, array = this.navigations): void {
    array.forEach(nav => {
      if (nav.key === key) {
        nav.active = active;
      } else if (nav.children?.length) {
        this.toggle(key, active, nav.children);
      }
    });
  }
}
