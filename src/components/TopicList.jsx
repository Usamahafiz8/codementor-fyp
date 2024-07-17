import React from 'react';
import './Tutorials.css'; // Import the CSS file

const TopicList = ({ topics }) => {
    return (
        <div className="">
            {topics.map(topic => (
                <>
                <p className="">{topic.description}</p>
                    <h3>Detail</h3>
                        <p>{topic.detail}</p>
                        <h3>Code Examples</h3>
                        <pre>
                            <code>
                                {topic.codeExamples}
                            </code>
                        </pre>
            
                    <div className="topic-output">
                        <h3>Output</h3>
                        <pre>{topic.output}</pre>
                    </div>
            </>
            ))}
        </div>
    );
};

export default TopicList;