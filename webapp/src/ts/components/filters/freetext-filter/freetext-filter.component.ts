import { Component, EventEmitter, OnDestroy, Input, Output, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Selectors } from '@mm-selectors/index';
import { GlobalActions } from '@mm-actions/global';
import { AbstractFilter } from '@mm-components/filters/abstract-filter';

@Component({
  selector: 'mm-freetext-filter',
  templateUrl: './freetext-filter.component.html'
})
export class FreetextFilterComponent implements OnDestroy, OnInit, AbstractFilter {
  private globalActions;

  subscription: Subscription = new Subscription();
  inputText;

  @Input() disabled;
  @Input() mobileDropdown;
  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor(
    private store: Store,
  ) {
    this.globalActions = new GlobalActions(store);
  }

  ngOnInit() {
    const subscription = this.store
      .select(Selectors.getFilters)
      .subscribe(filters => this.inputText = filters?.search);
    this.subscription.add(subscription);
  }

  applyFieldChange(value, apply?) {
    this.inputText = value;
    apply && this.applyFilter();
  }

  applyFilter() {
    if (this.disabled) {
      return;
    }

    this.globalActions.setFilter({ search: this.inputText });
    // always force the search, so the user is taken from the report detail page to the list page on mobile,
    // when clicking on a case_id link
    this.search.emit(true);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clear() {
    if (this.disabled) {
      return;
    }
    this.applyFieldChange('');
  }
}
