# cleanchart
# a high-level framework that makes beautiful charts

from bokeh.io import show, output_notebook, output_file
from bokeh.models import ColumnDataSource, HoverTool, Range1d, LabelSet, Label, FixedTicker
from bokeh.palettes import Spectral6
from bokeh.plotting import figure
from bokeh.io.export import export_png


def cvbar(x, y, title=None, filename=None, x_label=None, y_label, text_size=2, sort_size=True, reverse=False)
    """Creates and exports a clean bar chart into the current working directory as png.



    """
    export_png(p, filename='foo.png')


def chbar
