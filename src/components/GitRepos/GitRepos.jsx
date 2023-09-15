import React, { Component } from 'react';
import { GitHeader } from './GitHeader';
import { GitReposList } from './GitReposList';
import { repos } from 'assets/repos';
import { fetchRepos } from '../../services/api';
import { FidgetSpinner } from 'react-loader-spinner';
import { Flex } from 'components/Counter/Counter.styled';

export class GitRepos extends Component {
  state = {
    repos: [],
    loading: false,
    error: null,
    query: '',
  };
  // componentDidMount(){
  //     this.fetchData()
  // }
  componentDidUpdate(_, prevState) {
    const { query } = this.state;
    if (query !== prevState.query) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    this.setState({ loading: true });
    try {
      const { data } = await fetchRepos({ q: this.state.query });
      //  console.log(data)
      this.setState({ repos: data.items, loading: false });
    } catch (error) {
      console.log(error);
    }
  };
  handleChangeQuery = query => {
    this.setState({ query: query });
  };
  render() {
    // const { query } = this.state
    const { loading } = this.state;
    return (
      <>
        <GitHeader handleChangeQuery={this.handleChangeQuery} message="1111" />
        {loading ? (
          <Flex>
            <FidgetSpinner
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              ballColors={['#ff0000', '#00ff00', '#0000ff']}
              backgroundColor="#F4442E"
            />
            <h1>Loading......</h1>
          </Flex>
        ) : (
          <GitReposList repos={this.state.repos}></GitReposList>
        )}
      </>
    );
  }
}
