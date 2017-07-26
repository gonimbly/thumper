import React, { Component } from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const RSPagination = {};

RSPagination.title = 'Reactstrap Pagination';

RSPagination.template = class extends Component {
  render() {
    return (
      <CodeCard id={'RSPagination'} title={RSPagination.title}>
        <Pagination>
          <PaginationItem disabled>
            <PaginationLink previous href="#">
              <span className="fa"></span>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#">
              <span className="fa"></span>
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </CodeCard>
    );
  }
};

export default RSPagination;