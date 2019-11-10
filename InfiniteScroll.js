import React from 'react'
import {
  ItemRow,
  DropDownContainer,
  RowContainer,
} from './dropDown_loadmore_style'
import {
  DEVICE_DROPDOWN,
  CONTACT_DROPDOWN,
  FLOW_DROPDOWN,
} from 'components/contact_center/common/constants/constants.js'

export default class ListLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: 20,
      page: 1,
      loadingState: false,
      selectedValue: '',
      scrollHeight: 400,
      searchedItem: props.searchedItem,
    }
  }

  componentDidMount() {
    this.refs.iScroll.addEventListener('scroll', () => {
      if (
        this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=
        this.state.scrollHeight - 20
      ) {
        this.loadMoreItems()
      }
    })
  }

  loadMoreItems() {
    if (this.props.dropdown === CONTACT_DROPDOWN) {
      this.setState({
        loadingState: true,
        scrollHeight: this.state.scrollHeight + 800,
      })
      setTimeout(() => {
        this.setState({
          page: this.state.page + 1,
          loadingState: false,
        })
        this.props.getContactList(
          this.props.accountSid,
          this.state.items,
          this.state.page
        )
      }, 1000)
    }

    if (this.props.dropdown === DEVICE_DROPDOWN) {
      this.setState({
        loadingState: true,
        scrollHeight: this.state.scrollHeight + 800,
      })
      setTimeout(() => {
        this.setState({
          page: this.state.page + 1,
          loadingState: false,
        })
        this.props.getDevicesList(
          this.props.accountSid,
          this.state.items,
          this.state.page
        )
      }, 1000)
    }

    if (this.props.dropdown === FLOW_DROPDOWN) {
      this.setState({
        loadingState: true,
        scrollHeight: this.state.scrollHeight + 800,
      })
      setTimeout(() => {
        this.setState({
          page: this.state.page + 1,
          loadingState: false,
        })
        this.props.getFlowList(
          this.props.accountSid,
          this.state.items,
          this.state.page
        )
      }, 1000)
    }
  }

  render() {
    return (
      <DropDownContainer
        ref="iScroll"
        style={{
          height: 'auto',
          'max-height': '140px',
          overflow: 'auto',
        }}
      >
        {this.props.userList &&
          this.props.userList.map((item, key) => {
            return (
              <ItemRow key={key} onClick={() => this.props.selectedValue(item)}>
                {' '}
                {item}
              </ItemRow>
            )
          })}

        {this.state.loadingState ? (
          <p className="loading"> loading More Items..</p>
        ) : (
          ''
        )}
      </DropDownContainer>
    )
  }
}
