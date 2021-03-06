import React from 'react';
import { mount } from 'enzyme';
import DataTableHeader from '.';

const dataPreview = {
  columnOrder: [],
  columns: [],
  currentPage: 0,
  density: 'density-3',
  excludedColumns: {},
  filters: [],
  pageSize: 20,
  rowsTotal: '100',
  sort: [],
  values: [{ foo: 'bar' }],
};
const dataFunctions = {
  pageSizeChange: (elem) => elem,
  densityChange: (elem) => elem,
  toggleColumns: (elem) => elem,
  reorderColumns: (elem) => elem,
};

describe('<DataTableHeader />', () => {
  const defaultWrapper = mount(
    <DataTableHeader
      id="foo"
      dataPreview={dataPreview}
      dataFunctions={dataFunctions}
      options={{
        pageSizer: {},
        pageResults: {},
        advancedOptions: {},
        tableDensity: {},
        fullScreen: {},
      }}
    />,
  );

  const customWrapper = mount(
    <DataTableHeader
      options={{
        pageSizer: {
          hidePageSizer: true,
        },
        pageResults: {
          hidePageResults: true,
        },
        advancedOptions: {
          hideAdvancedOptions: true,
        },
        tableDensity: {
          hideDisplayDensity: true,
        },
        fullScreen: {
          hideFullScreen: true,
        },
      }}
      id="foo"
      dataPreview={dataPreview}
      dataFunctions={dataFunctions}
    />,
  );

  it('renders correctly with default settings', () => {
    expect(defaultWrapper.exists('div.data-table-header')).toBe(true);
    expect(defaultWrapper.find('div.data-table-results').text()).toBe('1 - 20 of 100 rows');
    expect(defaultWrapper.exists('div.data-table-density')).toBe(true);
    expect(defaultWrapper.exists('div.page-size-options')).toBe(true);
    expect(defaultWrapper.exists('div.data-table-adv-options')).toBe(true);
  });
  it('renders no options', () => {
    expect(customWrapper.exists('div.data-table-header')).toBe(true);
    expect(customWrapper.exists('div.data-table-results')).toBe(false);
    expect(customWrapper.exists('div.data-table-density')).toBe(false);
    expect(customWrapper.exists('div.page-size-options')).toBe(false);
    expect(customWrapper.exists('div.data-table-adv-options')).toBe(false);
  });
});
