=========
Dimension
=========

Defining the domain
===================

Domain origin
-------------
To define the domain origin, the following parameter should be set.

``region_origin_latitude_deg``
    * Type: Float
    * Description: The latitude (in degree) of the origin. Note that the origin is the left bottom corner of the domain. 


``region_origin_longitude_deg``
    * Type: Float
    * Description: The longitude (in degree) of the origin. Note that the origin is the left bottom corner of the domain. 

``region_depth_shallow_m`` (Confirmation Needed)
    * Type: Float
    * Description: The starting depth (in meter) of the region.

Note that for :ref:`Part 2` analysis, the origin here is the left bottom corner of the box that is created by :ref:`DRM offsets`.

Domain dimension
----------------
To define the domain dimension, the following parameter should be set.

``region_length_east_m``
    * Type: Float
    * Description: The length (in meter) from the origin to the east boundary.

``region_length_north_m``
    * Type: Float
    * Description: The length (in meter) from the origin to the north boundary.

``region_depth_deep_m``
    * Type: Float
    * Description: The length (in meter) from the origin to the depth limit.


DRM dimensions
==============
For DRM (Domain Reduction Method) dimensions, check :ref:`DRM offsets` and :ref:`DRM boundary`.