=========
Dimension
=========

Defining the domain
===================

Domain origin
-------------
To define the domain origin, setting the following lines in the input file.

.. code-block::

    region_origin_latitude_deg = latitude_of_origin
    region_origin_longitude_deg = longitude_of_origin

``latitude_of_origin`` and ``longitude_of_origin`` mentioned above should be replaced with the latitude and the longitude of the domain origin. This origin will be the left bottom corner of the domain.

Note that for :ref:`Part 2` analysis, the origin here is the left bottom corner of the box that is created by :ref:`DRM offsets`.

Domain dimension
----------------
To define the domain dimension, setting the following lines in the input file.

.. code-block::

    region_length_east_m = length_to_the_east_boundary
    region_length_north_m = length_to_the_north_boundary
    region_depth_deep_m = depth_to_the_earth

``length_to_the_east_boundary``, ``length_to_the_north_boundary``, and ``depth_to_the_earth`` mentioned above should be replaced with the lengths (in meters) from origin to the east boundary, the north boundary, and to the depth limit.

DRM dimensions
==============
For DRM (Domain Reduction Method) dimensions, check :ref:`DRM offsets` and :ref:`DRM boundary`.