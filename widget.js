import React from 'react'

class comp_name extends React.Component {
    uploadWidget = (name, id) => {
        const cloudFolder = `my_foldername/${name}_${id}`

        window.cloudinary.openUploadWidget(
            {
                cloudName: 'countdownwow',
                uploadPreset: 'countdownwow_unsigned',
                maxImageWidth: 2400,
                maxImageHeight: 2400,
                // maxFiles: imgLeft,
                tags: [name, id, 'countdownWow'],
                folder: cloudFolder,
            },
            (err, result) => {
                if (!err) {
                    console.log('result.info = ', result.info)
                    const url = result.info.secure_url
                    const filename = result.info.original_filename
                    const created_at = result.info.created_at
                    const path = result.info.path

                    console.log(
                        'url, filename, created_at, path = ',
                        url,
                        filename,
                        created_at,
                        path
                    )

                    if (url) {
                        this.state.imageArray.push(url)
                        // Use Apollo mutation to add to users imagelibrary
                        // https://stackoverflow.com/questions/56417197/apollo-mutations-without-react-mutation-component
                    }
                }
            }
        )
    }
    render() {
        return (
            <div>
                <p>comp_name</p>
                <button
                    onClick={() => {
                        this.uploadWidget('JoeBlogs', '1234567890')
                    }}
                >
                    upload
                </button>
            </div>
        )
    }
}

export default comp_name
