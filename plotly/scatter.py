import random

import plotly.graph_objects as go

x_data = [random.randint(0, 100) for i in range(10)]
y_data = [random.randint(0, 100) for i in range(10)]

fig = go.Figure(data=go.Scatter(x=x_data, y=y_data, mode='markers'))
fig.show()
