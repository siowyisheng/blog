import matplotlib.pyplot as plt
# plt.plot([1, 2, 3, 4])
# plt.ylabel('some numbers')
# plt.show()

names = ['Build brick house', 'Build food house', 'Build tool house', 'Build wine house', 'Build cloth house', 'Spawn colonist']
values = [5, 9, 11, 13, 15, 9]

fig = plt.figure()
ax = fig.add_subplot(111)
for i, j in zip(names, values):
    ax.annotate(str(j), xy=(i, j + 0.5))

plt.bar(names, values)
plt.suptitle('Costs of common actions')
plt.show()

# plt.plot([1, 2, 3, 4], [1, 4, 9, 16])

# plt.xlabel('Smarts')
# plt.ylabel('Probability')
# plt.title('Histogram of IQ')
# plt.text(60, .025, r'$\mu=100,\ \sigma=15$')
# plt.axis([40, 160, 0, 0.03])
# plt.grid(True)
# plt.show()

# plt.annotate('local max', xy=(2, 1), xytext=(3, 1.5),
#              arrowprops=dict(facecolor='black', shrink=0.05),
#              )

# FORCES INTEGER TICKS
# plt.axis.set_major_locator(ticker.MaxNLocator(integer=True))
