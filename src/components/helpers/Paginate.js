import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
type PaginateProps = {
  data?: {
    total?: number,
    perPage?: number,
    currentPage?: number,
    lastPage?: number,
    from?: number,
    to?: number,
    nextPage?: number,
    prevPage?: number
  },
  renderDetail?: boolean,
  onPageNumberClick?: (...args: any[]) => any
};
class Paginate extends React.Component<PaginateProps, {}> {
  constructor(props) {
    super(props);
    this.renderPaginationItem = this.renderPaginationItem.bind(this);
  }
  renderPaginationItem(items) {
    let children = [];
    for (let i = 1; i <= items; i++) {
      children.push(
        <PaginationItem active={i === this.props.data.currentPage} key={i}>
          <PaginationLink onClick={() => this.props.onPageNumberClick(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return children;
  }
  render() {
    let props = this.props.data;
    return (
      <React.Fragment>
        {this.props.renderDetail ? (
          <p>
            กำลังแสดงรายการจาก {props.from} ถึง {props.to} จากทั้งหมด{" "}
            {props.total} รายการ
          </p>
        ) : (
          undefined
        )}
        <Pagination aria-label="Pagination">
          <PaginationItem disabled={props.prevPage ? false : true}>
            {props.prevPage ? (
              <PaginationLink
                previous
                onClick={() => this.props.onPageNumberClick(props.prevPage)}
              />
            ) : (
              <PaginationLink previous onClick={() => void 0} />
            )}
          </PaginationItem>

          {this.renderPaginationItem(props.lastPage)}
          <PaginationItem disabled={props.nextPage ? false : true}>
            {props.nextPage ? (
              <PaginationLink
                next
                onClick={() => this.props.onPageNumberClick(props.nextPage)}
              />
            ) : (
              <PaginationLink next onClick={() => void 0} />
            )}
          </PaginationItem>
        </Pagination>
      </React.Fragment>
    );
  }
}
Paginate.defaultProps = {
  data: {
    total: 0,
    perPage: 20,
    currentPage: 1,
    lastPage: 1,
    from: 0,
    to: 0,
    nextPage: null,
    prevPage: null
  },
  size: "md",
  renderDetail: true,
  onPageNumberClick: () => {}
};
export default Paginate;
