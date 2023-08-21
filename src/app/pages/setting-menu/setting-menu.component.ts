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
  saveEdit(): void {
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
    this.collapse();
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
          isEdit: true,
        });
      } else if (item.children) {
        this.onCreate(key, item.children);
      }
    });
  }

  onDelete(key: string, array = this.navigations) {
    console.log(key);
    array.findIndex(arr => {

    })
  }

  // findIndex(arr: any, _key: string) {
  //   return arr.findIndex(item => item.key === key)
  // }


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
}
