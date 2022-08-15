<script lang="ts">
  import FilePond, { registerPlugin, supported } from 'svelte-filepond';

  import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

  // Register the plugins
  registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

  // a reference to the component, used to call FilePond methods
  let pond;

  // pond.getFiles() will return the active files

  // the name to use for the internal file input
  let name = 'filepond';

  // handle filepond events
  function handleInit() {
    console.log('FilePond has initialised');
  }

  function handleAddFile(err:any, fileItem: any) {
    console.log('A file has been added', fileItem);
  }
</script>

<FilePond bind:this={pond} {name}
  server="/"
  allowMultiple={true}
  oninit={handleInit}
  onaddfile={handleAddFile}
/>

<style global>
  @import 'filepond/dist/filepond.css';
  @import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
</style>