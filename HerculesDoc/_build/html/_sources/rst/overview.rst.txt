========
Overview
========

Octree dimension
================
Since Hercules is an octree-based finite element simulator. All the dimensions in Hercules have to be "octree dimension." That means all dimensions are related to the largest dimension of the domain. Specifically, dimensions have to be 

.. math::
    
    \frac{\text{(The largest dimension of the domain)}}{2^n}

where n is a positive integer (up to 31).

This is why Hercules is so efficient (because all elements are cubical).