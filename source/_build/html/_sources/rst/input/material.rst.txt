========
Material
========

.. TEMPLATE
.. ``parameter_name``
..     * Optional:
..     * Type:
..     * Description:

.. ``monitor_file`` (Confirmation needed)
..     * Type: Path
..     * Description: The path to a text file in which Hercules would write information as it runs for users to monitor jobs.

.. ``planes_input_file``
..     * Type: Path
..     * Description: The path to plane input file (The input file itself). This should not be necessary and it will be deprecated in the future.

One-dimensional layered profile
===============================

``cvmdb_input_file``
    * Type: Path/profile
    * Description: The path to the material information (crustal structure) database. A special way to assign the crustal structure is setting this parameter to "profile", i.e.

    .. code-block::

        cvmdb_input_file = profile

    * By doing so, Hercules will use the crustal structure provided by parameters ``number_profile_layers`` and ``profile_layers`` in the same input file.


``number_profile_layers``
    * Type: Integer
    * Description: How many layers are the parameter ``profile_layers`` defines.


``profile_layers``
    * Type: Multiple numbers
    * Format: ``z_top Vp Vs rho Qp Qs``
    * Description: The crustal structure information defined for a layered half-space. The data should be written as many lines as parameter ``number_profile_layers`` defines. ``z_top`` is the depth (in meter), ``Vp`` and ``Vs`` are velocities for compressional and shear waves (in meter/second), ``rho`` is the density (in kg/meter :superscript:`3`), and ``Qp`` and ``Qs`` are Q factor damping.


Istanbul material model
=======================

``Istanbul_material_model``
    * Optional: Yes
    * Type: Yes or No
    * Description: Whether to use the material database developed for the Istanbul or not. If this parameter is set to ``yes``, Hercules will replace the crustal structure information in the region that is covered by the Istanbul material database. For the rest of the region, the material information is still provided by the database or the profile that is assigned with the parameter ``cvmdb_input_file``. This is an optional parameter and the default value is ``no``.


Basin material model
====================

``basin_material_model``
    * Optional: Yes
    * Type: Yes or No
    * Description: Whether to use the material database developed for the Basin Material Model or not. If this parameter is set to ``yes``, Hercules will replace the crustal structure information in the region that is covered by the basin. For the rest of the region, the material information is still provided by the database or the profile that is assigned with the parameter ``cvmdb_input_file``. This is an optional parameter and the default value is ``no``. Note that either ``Istanbul_material_model`` or ``basin_material_model`` can be set to ``yes``. If both are set to ``yes``, the Istanbul material model will be used.


``basin_input_file``
    * Optional: Conditional
    * Type: Path
    * Description: The path to the basin input file. This parameter is required when ``basin_material_model`` is set to ``yes``. The basin input file is a text file that contains the information of the basin. The format of the basin input file is described in the section :ref:`Basin input file`.


``basin_origin_latitude_deg``
    * Optional: Conditional
    * Type: Float
    * Description: The latitude of the basin origin (in degree). Note that the origin is the left bottom corner of the domain of the basin. This parameter is required when ``basin_material_model`` is set to ``yes``.


``basin_origin_longitude_deg``
    * Optional: Conditional
    * Type: Float
    * Description: The longitude of the basin origin (in degree). Note that the origin is the left bottom corner of the domain of the basin. This parameter is required when ``basin_material_model`` is set to ``yes``.


Basin input file
----------------

The basin input file should be a text file (the extension is not important) that contains the information of the basin. The format of the basin input file is described below.

    * The first line: number_of_x_points number_of_y_points number_of_z_points

Note the the number of z points should always be 1.

    * The second and the following lines: x y z
    
Repeat the line with x points written in ascending order, then y points in ascending order, and z in ascending. The following is a complete basin input file example:

.. code-block::

    6 2 1
    0.0 0.0 0.0
    50.0 0.0 0.0
    100.0 0.0 3.0
    150.0 0.0 4.5
    200.0 0.0 5.0
    250.0 0.0 5.0
    0.0 50.0 0.0
    50.0 50.0 0.0
    100.0 50.0 2.8
    150.0 50.0 4.2
    200.0 50.0 4.8
    250.0 50.0 5.0

Note that the increment of x and y should be the same. The increment of z can be different. The unit of x, y, and z is meter.

The total number of lines in the basin input file should be ``number_of_x_points * number_of_y_points + 1``. In the example above, the total number of lines is ``13``.


basin.c
-------

Unfortunately, we don't have a universal way to read a text file to define the equations of the material properties used in the basin. Therefore, users have to modify the file ``basin.c`` to define these equations. The file ``basin.c`` is located in ``/quake/forward`` and contains a function ``getBasinMaterialProperties`` that defines these equations. The following is an example of ``basin.c``:

.. code-block:: c

    #include <math.h>
    #include "basin.h"

    int getBasinMaterialProperties(cvmpayload_t *g_props, double z_m) {
        g_props->rho = 2140.0 + 0.125*z_m;
        g_props->Vp = 1000.0 + 1.2*z_m;        
        g_props->Vs = 320.0 + 19.0*sqrt(z_m);
        g_props->Qs = 0.4*g_props->Vs;
        g_props->Qp = 0.5*g_props->Qs;
        return 0;
    }

Note that you should re-compile Hercules after modifying ``basin.c``.