import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const Messages = {};

Messages.title = 'Messages';

Messages.template = (props) => {
  return (
    <CodeCard id={'messages'} title={Messages.title}>
      <div className='msg-block card-block'>
        <div className='msg-container' style={{minHeight: '300px'}}>
          <div className='msg-content'>
            <div className='msg-user msg-inbound'>Leo</div>
            <div className='msg msg-inbound'>
              Hey how are you?
            </div>
            <div className='msg-user msg-outbound'>You</div>
            <div className='msg msg-outbound'>
              Great! Hows portland?
            </div>
            <div className='msg-user msg-inbound'>Leo</div>
            <div className='msg msg-inbound'>
              I Put a bird on it with my cold-pressed juice. Just got a ethical fingerstache tote bag, seitan meggings, selvage chartreuse and cray next-level biodiesel.
            </div>
            <div className='msg-user msg-outbound'>You</div>
            <div className='msg msg-outbound'>
              I put a bird on it with my cold-pressed juice. Just got a ethical fingerstache tote bag, seitan meggings, selvage chartreuse and cray next-level biodiesel.
            </div>
            <div className='msg-user msg-outbound'>You</div>
            <div className='msg msg-outbound'>
              I put a bird on it with my cold-pressed juice. Just got a ethical fingerstache tote bag, seitan meggings, selvage chartreuse and cray next-level biodiesel.
            </div>
          </div>
        </div>
      </div>
    </CodeCard>
  );
};

export default Messages;