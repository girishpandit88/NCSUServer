google.load("visualization", "1");

// Set callback to run when API is loaded
google.setOnLoadCallback(drawVisualization);
// Called when the Visualization API is loaded.
function drawVisualization() {

        // Create and populate a data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Tag');
        data.addColumn('string', 'URL');
		data.addColumn('number', 'Font size');
        data.addRows(8);
        data.setCell(0, 0, 'Organic Coding');
        data.setCell(0, 1, 'http://itsmyviewofthings.blogspot.com/2011/07/organic-coding.html');
		data.setCell(0, 2, 2+2.5*7);
        data.setCell(1, 0, 'Art of Effective Computing');
        data.setCell(1, 1, 'http://itsmyviewofthings.blogspot.com/2011/04/art-of-affective-computing.html');
		data.setCell(1, 2, 2+2.5*5);
        data.setCell(2, 0, 'Smudge Attacks');
        data.setCell(2, 1, 'http://itsmyviewofthings.blogspot.com/2011/03/smudge-attacks-for-smartphones.html');
		data.setCell(2, 2, 2+2.5*6);
        data.setCell(3, 0, 'Denial of Service Attack on web app framework');
        data.setCell(3, 1, 'http://itsmyviewofthings.blogspot.com/2012/01/denial-of-service-on-web-app.html');
		data.setCell(3, 2, 2+2.5*7);
        data.setCell(4, 0, 'Technological Singularity');
        data.setCell(4, 1, 'http://itsmyviewofthings.blogspot.com/2011/03/technological-singularity-not-for.html');
		data.setCell(4, 2, 2+2.5*3);
        data.setCell(5, 0, 'Wireless Mesh Network');
        data.setCell(5, 1, 'http://itsmyviewofthings.blogspot.com/2011/02/wireless-mesh-network-using-android.html');
		data.setCell(5, 2, 2+2.5*2);
        data.setCell(6, 0, 'Xen hypervisor on Ubuntu 11.10');
        data.setCell(6, 1, 'http://itsmyviewofthings.blogspot.com/2011/12/xen-with-ubuntu-1110-as-dom0.html');
		data.setCell(6, 2, 2+2.5*1);
        data.setCell(7, 0, 'Android 4.0 Compile and Build');
        data.setCell(7, 1, 'http://itsmyviewofthings.blogspot.com/2011/12/compiling-and-building-android-40.html');
		data.setCell(7, 2, 2+2.5*1);

        // Instantiate our table object.
        var vis = new gviz_word_cumulus.WordCumulus(document.getElementById('clouddiv'));

        // Draw our table with the data we created locally.
        vis.draw(data, {text_color: '#aaaaaa', speed: 190, width:900, height:400});
}