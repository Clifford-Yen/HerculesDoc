========
Material
========

.. TEMPLATE
.. ``parameter_name``
..     * Optional:
..     * Type:
..     * Description:

One-dimensional layered profile
===============================

``cvmdb_input_file``
    * Type: Path/profile
    * Description: The path to the material information (crustal structure) database. A special way to assign the crustal structure is setting this parameter to ``profile``, i.e.

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


Istanbul velocity model
=======================

``Istanbul_velocity_model``
    * Optional: Yes
    * Type: Yes or No
    * Description: Whether to use the velocity model developed for the Istanbul or not. If this parameter is set to ``yes``, Hercules will replace the crustal structure information in the region that is covered by the Istanbul velocity model. For the rest of the region, the material information is still provided by the database or the profile that is assigned with the parameter ``cvmdb_input_file``. This is an optional parameter and the default value is ``no``. 


Basin velocity model
====================

``basin_velocity_model``
    * Optional: Yes
    * Type: Yes or No
    * Description: Whether to use the velocity model developed for a basin. If this parameter is set to ``yes``, Hercules will replace the crustal structure information within the basin. For the rest of the region, the material information is still provided by the database or the profile that is assigned with the parameter ``cvmdb_input_file``. This is an optional parameter and the default value is ``no``. Note that only one of the ``Istanbul_velocity_model``, ``basin_velocity_model``, and ``3D_velocity_model`` can be set to ``yes``. If multiple options are set to ``yes``, the system prioritizes the models in the following order: Istanbul model, Basin model, and then the 3D velocity model. The latter models won't be used if the former models are used.


``basin_input_file``
    * Optional: Conditional
    * Type: Path
    * Description: The path to the basin input file. This parameter is required when ``basin_velocity_model`` is set to ``yes``. The basin input file is a text file that describes the boundary of the basin. The format of the basin input file is described in the section :ref:`Basin input file`.


``basin_origin_latitude_deg``
    * Optional: Conditional
    * Type: Float
    * Description: The latitude of the basin origin (in degree). Note that the origin is the left bottom corner of the domain of the basin. This parameter is required when ``basin_velocity_model`` is set to ``yes``.


``basin_origin_longitude_deg``
    * Optional: Conditional
    * Type: Float
    * Description: The longitude of the basin origin (in degree). Note that the origin is the left bottom corner of the domain of the basin. This parameter is required when ``basin_velocity_model`` is set to ``yes``.


Basin input file
----------------

The basin input file should be a text file (the extension is not important) that describes the boundary of the basin. The format of the basin input file is described below.

    * The first line: number_of_x_points number_of_y_points number_of_z_points

Note the the number of z points should always be 1.

    * The second and the following lines: x y z
    
Repeat the line with x points written in ascending order, then y points in ascending order, and z in ascending. The following is a working basin input file example:

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

Note that the increments of x and y should be the same. The increment of z can be different. The unit of x, y, and z is meter.

The total number of lines in the basin input file should be ``number_of_x_points * number_of_y_points + 1``. In the example above, the total number of lines is ``13``.


basin.c
-------

Unfortunately, we don't have a universal way to read a text file to define the equations of the material properties used in the basin. Therefore, users have to modify the file ``basin.c`` to define these equations. The file ``basin.c`` is located in ``./quake/forward`` and contains a function ``getBasinMaterialProperties`` that defines these equations. The following is an example of ``basin.c``:

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


3D velocity model
=========================
Contrast to the Istanbul velocity model, the 3D velocity model is a general velocity model that covers any interested regions. Users need to provide the velocity model in the designated format. The format of the 3D velocity model is described in the section :ref:`3D velocity model input files`.

``3D_velocity_model``
    * Optional: Yes
    * Type: Yes or No
    * Description: Whether to use the general 3D velocity model or not. If this parameter is set to ``yes``, Hercules will replace the crustal structure information in the region that is covered by the general 3D velocity model. For the rest of the region, the material information is still provided by the database or the profile that is assigned with the parameter ``cvmdb_input_file``. This is an optional parameter and the default value is ``no``. Note that only one of the ``Istanbul_velocity_model``, ``basin_velocity_model``, and ``3D_velocity_model`` can be set to ``yes``. If multiple options are set to ``yes``, the system prioritizes the models in the following order: Istanbul model, Basin model, and then the 3D velocity model. The latter models won't be used if the former models are used.

``3D_velocity_model_origin_latitude_deg``
    * Optional: Conditional
    * Type: Float
    * Description: The latitude of the origin of the 3D velocity model (in degree). Note that the origin is the left bottom corner of the domain of the 3D velocity model. This parameter is required when ``3D_velocity_model`` is set to ``yes``.

``3D_velocity_model_origin_longitude_deg``
    * Optional: Conditional
    * Type: Float
    * Description: The longitude of the origin of the 3D velocity model (in degree). Note that the origin is the left bottom corner of the domain of the 3D velocity model. This parameter is required when ``3D_velocity_model`` is set to ``yes``.


3D velocity model input files
-----------------------------
To make it easier to understand the format of the 3D velocity model input files, here is an example before we convert it to the format that Hercules can read:

.. code-block::
    
    0.0,0.0,0,1709.769,4188.062,1.85
    0.0,0.0,1000,1894.495,4640.546,1.898
    0.0,0.0,3000,2430.156,5952.642,2.02
    0.0,0.0,17400,3400.0,8328.265,2.197
    500.0,0.0,0,1743.876,4271.606,1.859
    500.0,0.0,1000,1920.505,4704.257,1.905
    500.0,0.0,5000,2625.958,6432.257,2.06
    500.0,0.0,17400,3400.0,8328.265,2.197
    0.0,500.0,0,1577.978,3865.241,1.814
    0.0,500.0,1000,1840.914,4509.3,1.885
    0.0,500.0,6000,2714.21,6648.43,2.077
    500.0,500.0,0,1609.918,3943.478,1.823
    500.0,500.0,1000,1861.275,4559.174,1.89
    500.0,500.0,5000,2712.018,6643.06,2.076
    500.0,500.0,17400,3400.0,8328.265,2.197

The meanings of each column are:

    * x (in meter, along the north-south direction with north being positive)
    * y (in meter, along the east-west direction with east being positive)
    * z (in meter, positive downward)
    * Vs (in meter/second)
    * Vp (in meter/second)
    * density (in kg/meter :superscript:`3`)

The order of the columns is not important since this file has to be converted into multiple files which will be explained later. Note that the increments of x and y can be different, but they have to be consistent (i.e. the increment of x has to be the same for all lines, so does the increment of y). The increment of z can also be different, and it can varies from point to point. The number layers can be different for different points, too.

Some rules have to be followed when writing the 3D velocity model input file:

    * The x coordinates should be written in ascending order
    * The y coordinates should be written in ascending order
    * Finish writing all points with the same y coordinate before moving to the next y coordinate.
    * For each x-y coordinate, the z coordinates should be written in ascending order and should be unique.

The file above should be converted into multiple files. The required files include: ``x.in``, ``y.in``, ``z.in``, ``vs.in``, ``vp.in``, ``rho.in``, and ``index.in``. 

The file ``x.in`` contains the x coordinates of all points. The following is the content of ``x.in`` for the example above:

.. code-block::

    2
    0.0
    500.0

The first line of the file is the number of points along the x direction (same as the number of following lines in the file). The following lines are the x coordinates of all points. Note that the x coordinates should be written in ascending order and should be unique. The same rule applies to ``y.in``. In this case, the content of ``y.in`` would be the same as ``x.in``. But if the increment of y or/and the number of points of y are different from x, the content of ``y.in`` will be different.

For ``z.in``, ``vs.in``, ``vp.in``, and ``rho.in``, the content in each of these files is simply the corresponding column in the original file. For example, the content of ``z.in`` for the example above is:

.. code-block::

    15
    0
    1000
    3000
    17400
    0
    1000
    5000
    17400
    0
    1000
    6000
    0
    1000
    5000
    17400

Again, the first line is the total number of the data (same as the number of following lines in the file). The following lines are the z coordinates of all points. The same rule applies to ``vs.in``, ``vp.in``, and ``rho.in``. 

The file ``index.in`` is a special file that includes the starting indices for all points. For example, the content of ``index.in`` for the example above is:

.. code-block::

    4
    0
    4
    8
    11

The first line is the total number of the x-y coordinates (same as the number of the following lines. It's also the same as the multiplication of the number of x points and the number of y points). The following lines are the starting indices for all points. 

For example, the first point (0.0, 0.0) has the starting index of 0 and the second point (500.0, 0.0) has the starting index of 4, which means the first (index 0) to the fourth (index 3) line in ``z.in``, ``vs.in``, ``vp.in``, and ``rho.in`` are the data for the first point. Similarly, the second point (500.0, 0.0) has the starting index of 4 and the third point (0.0, 500.0) has the starting index of 8, which means the fifth (index 4) to the eighth (index 7) line in ``z.in``, ``vs.in``, ``vp.in``, and ``rho.in`` are the data for the second point. So on and so forth.

The conversion can be done easily with the help of Pandas, a Python library. For your convenience, here is a working Python script that can convert the original file to the required files:

.. code-block:: python3

    import pandas as pd

    def convertToHerculesVelocityModel(fileName):
        df = pd.read_csv(fileName)
        for col in ['z', 'vs', 'vp', 'rho']:
            df[col].to_csv(col+'.in', index=False, header=[len(df[col])])
        df = df.drop_duplicates(subset=['x', 'y'])
        df.index.name = len(df)
        indexSeries = df.index.to_series()
        indexSeries.to_csv('index.in', index=False, header=[len(indexSeries)])
        for col in ['x', 'y']:
            df[col].drop_duplicates().to_csv(col+'.in', index=False, header=[len(df[col].drop_duplicates())])

    if __name__ == '__main__':
        convertToHerculesVelocityModel('herculesVelocityModel.csv')

All the converted files should be placed in ``./inputfiles/materialfiles`` in order to let Hercules find them. The original file is not necessary, but it is recommended to keep it to easily understand the meaning of each converted file.


Misc
====
``softening_factor``
    * Optional: Yes
    * Type: Float
    * Description: The softening factor used to adjust material properties according to the element size. A factor of 1 means perfect compliance between the mesh and the elements' material properties resulting in strong changes to the results. A factor of 4 tends to double the simulation :math:`\Delta t` without affecting too much the results. Testing is needed, and it's recommended to use a factor larger than 4. The possible value for this parameter is 0 and any floating number larger than 1. This is an optional parameter and the default value is ``0``, which asks Hercules not to change material properties with softening factor.

``the_threshold_Vp_over_Vs``
    * Type: Float
    * Description: The threshold to limit the :math:`V_p/V_s` ratio. If the computed :math:`V_p/V_s` is larger than this threshold, :math:`V_p` will be set to this threshold multiplied by :math:`V_s` when correcting material properties for mesh elements and in the calculation of the first Lamé parameter :math:`\lambda`.
