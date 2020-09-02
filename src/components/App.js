import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyAmA7nUi_AYwSH2bkacNKIaQlWAfvOJYGo';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
// This will display videos of children as our default search result on the 
// before the user makes changes.
  componentDidMount(){
    this.onTermSubmit('Children')
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
      },
    });
// The send block of codes will help render a new video to the left of
// of the app. You can do that by adding a second argument to the 
//setState property and setting the item to [0].
// That means when a search is conducted, use the first item/ data and set it as
// our default video to the left side of the App
    this.setState({ videos: response.data.items,
    selectedVideo:response.data.items[0]});
  };
  onVideoSelect = (video) => {
      this.setState({selectedVideo:video})
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />

       <div className= 'ui grid'>
         <div className='ui row'>
           <div className ='eleven wide column'>
        <VideoDetail video = {this.state.selectedVideo}/>
           </div>

           <div className= 'five wide column'>
        <VideoList onVideoSelect={this.onVideoSelect} 
        videos={this.state.videos} />
          </div>

         </div>
      </div>
      </div>
    );
  }
}

export default App;
