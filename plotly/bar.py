# https://www.geeksforgeeks.org/bar-chart-using-plotly-in-python/
import plotly.express as px
import numpy as np

# creating random data through randomint
# function of numpy.random
np.random.seed(42)

random_x= np.random.randint(1, 101, 100)
random_y= np.random.randint(1, 101, 100)

fig = px.bar(random_x, y = random_y)
fig.show()
