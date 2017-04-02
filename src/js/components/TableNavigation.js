import React from 'react';

const TableNavigation = ({ onPageChange, currentPage, perPage, onPerPageChange }) => {
    const isClickForbidden = (currentPage - 1) < 0 ? {cursor: 'not-allowed'} : null;
    return (
        <div class="table-navigation">
          <span class="navigation-button"
                style={isClickForbidden}
                onClick={() => onPageChange(currentPage - 1)}>
              &lt; &lt; Previous
          </span>
            <p class="current-page-number">
                Current Page: {currentPage + 1}
            </p>
            <span class="navigation-button"
                  onClick={() => onPageChange(currentPage + 1)}>
              Next &gt; &gt;
          </span>

            <p>Users per page:
                <select value={perPage} onChange={onPerPageChange}>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </p>
        </div>
    )
};

export default TableNavigation;

TableNavigation.propTypes = {
    onPageChange: React.PropTypes.func,
    currentPage: React.PropTypes.number,
    perPage: React.PropTypes.number,
    onPerPageChange: React.PropTypes.func
};