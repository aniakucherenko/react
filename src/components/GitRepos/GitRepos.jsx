import React, { Component } from 'react'
import { GitHeader } from './GitHeader'
import { GitReposList } from './GitReposList'
import { repos } from 'assets/repos'
import {fetchRepos} from '../../services/api'

export class GitRepos extends Component {
    state = {
        repos: [],
        loading: false,
        error: null, 
        query: ''
    }
    // componentDidMount(){
    //     this.fetchData()
    // }
    componentDidUpdate (_, prevState) {
        const {query} = this.state
        if(query !== prevState.query) {
            this.fetchData()

        }
    }

fetchData = async () => {
    try {
     const {data} = await fetchRepos({ q: this.state.query })
    //  console.log(data)
     this.setState({ repos: data.items })
    }
    catch(error) {
      console.log(error)
    }
}
handleChangeQuery = (query) => {
    this.setState({ query: query })
}
render() {
        // const { query } = this.state
  return (
    <>
        <GitHeader handleChangeQuery={this.handleChangeQuery} message='1111' />
            <GitReposList repos={ this.state.repos } />
        </>
  )
 }
}

