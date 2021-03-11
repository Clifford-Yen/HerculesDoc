============================================
Domain Reduction Method (DRM) Implementation
============================================

Hercules is capable of implementing the Domain Reduction Method (DRM). You can implement it by setting the following lines in the input file. 

.. code-block::

    implement_drm = yes
    drm_directory = directory_to_store_information_of_DRM

``directory_to_store_information_of_DRM`` mentioned above should be replaced to the directory you want to store the DRM information. E.g., ``drm_directory = outputfiles/DRM``. And folders named ``part0``, ``part1``, and ``part2`` should be created manually in this directory.

There are three steps should be executed sequentially for implementing DRM in Hercules, which are part 0, part 1, and part 2. You can choose within these three parts by setting the value of ``which_drm_part`` in the input file. For example, setting the following line in the input file for running part 0 in Hercules:

.. code-block::
    
    which_drm_part = part0

Other parameters that are needed to be assigned for DRM will be explained in this documentation. Note that all the DRM parameters, except ``which_drm_part``, should be the same for all three parts.


Part 0, part 1, and part 2
==========================

Part 0
------
In part 0, the information of the coordinates of the DRM box would be generated.

To execute part 0 analysis, simply setting the following line in the input file.

.. code-block::
    
    which_drm_part = part0

Since the information of the coordinates of the DRM box is the only data that are generated, the end time of the simulation can be set as a small value (e.g., 1 sec). You can do so by setting the following line in the input file.

.. code-block::
    
    simulation_end_time_sec = 1

Part 1
------
In part 1, the displacements of DRM nodes would be saved.

To execute part 1 analysis, setting the following line in the input file.

.. code-block::
    
    which_drm_part = part1

Part 2
------
If you are not going to run nonlinear analysis, you don't need to run part 2 unless you want to store effective forces information for local use (e.g., for Abaqus).

In part 2, Hercules no longer get the information from the source. Instead, it gets the information from the results that are calculated in part 0 and part 1.

To execute part 2 analysis, setting the following line in the input file.

.. code-block::
    
    which_drm_part = part2


Other parameters
================

Defining the element size
-------------------------
Defining the element size (in meters) for elements in the DRM box by setting the following line in the input file.

.. code-block::
    
    drm_edgesize = element_size_in_the_DRM_box

``element_size_in_the_DRM_box`` mentioned above should be replaced with the edge size you want to define for elements in the DRM box.

Note that all the dimensions in Hercules have to be "octree dimension." For more information, please refer to :ref:`Octree dimension`

.. That means all dimensions are related to the largest dimension of the domain. Specifically, dimensions have to be 

.. .. math::
    
..     \frac{\text{(The largest dimension of the domain)}}{2^n}

.. where n is a positive integer (up to 31).

.. This is why Hercules is so efficient (because all elements are cubical).

:math:`\Delta t` and simulation time for part 1
-----------------------------------------------
These parameters only used for part 2 analysis.

You should set the same values for these two parameters, ``part1_delta_t`` and ``part1_simulation_time``, to ``simulation_delta_time_sec`` and ``simulation_end_time_sec``, respectively. You can do so by setting the following lines in the input file.

.. code-block::
    
    part1_delta_t = delta_t_used_in_part1_in_second
    part1_simulation_time = simulation_time_used_in_part1_in_second

``delta_t_used_in_part1_in_second`` and ``simulation_time_used_in_part1_in_second`` mentioned above should be replaced with the :math:`\Delta t` and the simulation end time that are used in part 1.

Print rate
----------
You can change the print rate by setting ``drm_print_rate`` in the input file. For example, you can set the print rate to 1 (which means Hercules would store output data every time step) by setting the following line in the input file.

.. code-block::

    drm_print_rate = 1

DRM offsets
-----------
DRM offsets are the distances (in meters) from the origin that is defined by parameters ``region_origin_latitude_deg`` and ``region_origin_longitude_deg``. You can define these parameters by setting the following lines in the input file.

.. code-block::

    drm_offset_x = drm_offset_from_origin_in_x_direction
    drm_offset_y = drm_offset_from_origin_in_y_direction

``drm_offset_from_origin_in_x_direction`` and ``drm_offset_from_origin_in_y_direction`` mentioned above should be replaced with the DRM offsets from the origin in x and y direction in meters, respectively.

Note that x direction is north-south direction (north is positive), while y direction is east-west direction (east is positive). And both offsets are still :ref:`Octree dimension`.

DRM offsets create a box bigger than the DRM boundary. The space between these two boundaries is used for the absorbing boundary conditions (ABCs).

DRM boundary
------------
Dimensions in DRM boundary section are distances (in meters) from the box that is created with DRM offsets. There are five dimensions needed to be defined., which are ``min_x``, ``min_y``, ``max_x``, ``max_y``, and ``depth``. You can define these parameters by setting the following lines in the input file.

.. code-block::

    drm_boundary =
        min_x    min_y    max_x    max_y    depth

``min_x``, ``min_y``, ``max_x``, ``max_y``, and ``depth`` mentioned above should be replaced with the values (in meters) of corresponding dimensions. There is no restriction on how many spaces should be placed between each dimensions and before the ``min_x``.