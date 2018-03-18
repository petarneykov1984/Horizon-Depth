import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../theme';
import Dropzone from 'react-dropzone';
import Button from '../components/Button';

const styles = {
  dropZone: {
    width: 600,
    height: 600,
    border: `1px dashed ${colors.headingGrey}`,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  activeDropZone: {
    borderColor: colors.black,
    backgroundColor: colors.black05,
  },
  rejectDropZone: {
    borderColor: colors.dangerRed,
    backgroundColor: 'transparent',
  },
  description: {
    fontSize: '32px',
    lineHeight: '44px',
    color: colors.headingGrey,
    marginBottom: '20px',
  },
  additionalDescription: {
    fontSize: '12px',
    color: colors.headingGrey,
  },
};

class FileUpload extends Component {
  constructor() {
    super();
    this.state = { files: [] };
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            style={styles.dropZone}
            activeStyle={styles.activeDropZone}
            rejectStyle={styles.rejectDropZone}
            onDrop={this.onDrop.bind(this)}
            accept="image/*"
          >
            <div style={styles.description}>Drag and Drop image <br />or </div>
            <Button label={`Select file...`} />
          </Dropzone>
          <p style={styles.additionalDescription}>Operative image size 600x600px</p>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}

export default Radium(FileUpload);
