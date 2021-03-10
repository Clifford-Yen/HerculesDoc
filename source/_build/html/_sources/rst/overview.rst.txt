========
Overview
========

Hercules is an octree-based finite element earthquake simulator by the Quake Group at Carnegie Mellon. For more information and its source code, please visit `Hercules' Github page`_.

.. _Hercules' Github page: https://github.com/CMU-Quake/hercules

However, there is nowhere to find a usable documentation of Hercules, which makes it really hard to understand and test. This project is aimed to finally document everything on how to use Hercules. The background knowledge and theories used in Hercules are not the priority in this documentation.

Disclaimer
==========
As the maintainer of this project, I, Clifford Yen, am not the owner nor the developer of Hercules. Due to the same reason, I do not have the right to distribute the most up-to-date source code of Hercules. If you are interested in having one, please contact the developers of Hercules.

Octree dimension
================
Since Hercules is an octree-based finite element simulator. All the dimensions in Hercules have to be "octree dimension." That means all dimensions are related to the largest dimension of the domain. Specifically, dimensions have to be 

.. math::
    
    \frac{\text{(The largest dimension of the domain)}}{2^n}

where n is a positive integer (up to 31).

This is why Hercules is so efficient (because all elements are cubical).