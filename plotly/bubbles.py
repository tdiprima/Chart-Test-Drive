import os
import sys

import networkx as nx
import numpy as np
import plotly.graph_objs as plt

# Define the data for the chart
N = 30  # Number of nodes

# x, y coordinates for the nodes
x = np.random.rand(N)
y = np.random.rand(N)

# size of nodes
z = np.random.rand(N) * 30

# Labels (displayed on hover)
labels = [str(i) for i in range(N)]

# size of nodes
node_size = [i * 10 for i in z]

# Create a random geometric graph
G = nx.random_geometric_graph(N, 0.2)

# Define the spring-like forces
pos = nx.spring_layout(G, pos={i: (x[i], y[i]) for i in range(N)})

# Create the scatter plot trace
trace = plt.Scatter(x=[], y=[], mode='markers', marker={'size': node_size})

"""
Define the update function for the chart
Updates the position of the nodes based on the spring-like forces.
Of course - why do we have to do that, it should be automatic.
"""
# TODO: There's no "pos" variable. I stuck it in there as an arg.
def update_layout(pos=None):
    # Update the position of the nodes based on the spring-like forces
    pos = nx.spring_layout(G, pos=pos, iterations=1, scale=1, k=1)
    x = [pos[i][0] for i in range(N)]
    y = [pos[i][1] for i in range(N)]
    trace.x = x
    trace.y = y


"""
Define the layout for the chart
Includes buttons for the user to play the animation
"""
layout = plt.Layout(
    title='Bubble Chart with Spring-Like Forces',
    showlegend=False,
    hovermode='closest',
    xaxis=dict(range=[0, 1], autorange=False),
    yaxis=dict(range=[0, 1], autorange=False),
    updatemenus=[dict(type='buttons', showactive=False, buttons=[dict(label='Play', method='animate', args=[None, dict(frame=dict(duration=50, redraw=True), fromcurrent=True, transition=dict(duration=0))])])]
)

"""
Create the frames for the animation
Includes the trace and the layout with the spring-like forces
"""
frames = [plt.Frame(data=[trace], layout=layout) for i in range(100)]

"""
 Create the figure, which includes the trace, the layout, and the frames,
 and add the spring-like forces to the chart animation
"""
fig = plt.Figure(data=[trace], layout=layout, frames=frames)

try:
    # Add the spring-like forces to the chart animation
    fig.update_layout(updatemenus=[dict(type='buttons', showactive=False,
                      buttons=[dict(label='Play', method='animate',
                      args=[None, dict(frame=dict(duration=50,
                      redraw=True), fromcurrent=True,
                      transition=dict(duration=0))])])]
    )
    # updatemode='immediate')
except Exception as ex:
    exc_type, exc_obj, exc_tb = sys.exc_info()
    fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
    print(exc_type, fname, exc_tb.tb_lineno)
    # print("Unexpected error:", sys.exc_info()[0])
    sys.exit(1)

# Show the chart
fig.show()
