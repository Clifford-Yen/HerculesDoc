=========
Compiling
=========

Prerequisites
=============
To compile Hercules, you need to have Open-MPI and GNU Scientific Library (GSL) installed. If you haven't installed them, the easiest way to do so is installing them via `Homebrew`_. Assuming Homebrew is installed on your machine, all you need to do is typing the following commands in the terminal one by one.

.. code-block:: shell

    brew install open-mpi
    brew install gsl

.. _Homebrew: https://brew.sh

Compiling with ``user.mk``
==========================
Although there are some predefined system configurations in ``system.mk``, it's very likely you will find that it's insufficient. As a result, it's recommended to write your own ``user.mk`` next to ``system.mk`` before you compile.

For example, the following lines can be written into ``user.mk`` and used for Macs.

.. code-block::

    # System definition
    # -----------------

    SYSTEM = MAC

    # Main compilation setup
    # ----------------------

    CFLAGS += -g -ggdb -O0

    # Compilation flags
    # -----------------

    # CVM and IO related:

    IO_CPPFLAGS = -DUSECVMDB -DSCEC  -DPROCPERNODE=4000

    ifeq ($(SYSTEM), MAC)
            MPI_DIR      = /usr/local/
            MPI_INCLUDE  = $(MPI_DIR)/include/openmpi/ompi/mpi/cxx
            CC           = $(MPI_DIR)/bin/mpicc
            CXX          = $(MPI_DIR)/bin/mpicxx
            LD           = $(MPI_DIR)/bin/mpicxx
            CXXFLAGS    += -DMPICH_IGNORE_CXX_SEEK
            CFLAGS      += -Wall
            CPPFLAGS    += -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64
            LDFLAGS     += /usr/local/lib/libgsl.a
    endif

    LDFLAGS += -lgslcblas
    LDFLAGS += -lgsl

Compiling procedure
===================
To compile Hercules, make sure to :code:`cd` into Hercules' folder and simply run the following lines in the terminal one by one.

.. code-block::

    make clean
    make cleanall
    make

Now, you are all set.

Side notes for M1 Macs
======================
If you are installing Hercules on Macs equipped with M1 SoC (the first Apple Silicon), here are some notes for you to install Hercules successfully.

* Install Open-MPI and GSL with native M1 support using natively M1 supported Homebrew. The installed Open-MPI and GSL should be located under :code:`/opt/homebrew/`
* Change ``user.mk`` accordingly
* (Optional) The last step of compiling procedure (:code:`make`) might need to be replaced with :code:`arch -arm64e make`

``user.mk`` for M1 Macs can be written as follows. (And yes, you can combine this section with the ``user.mk`` for Intel-based Macs. Just make sure you set the correct :code:`SYSTEM` variable.)

.. code-block::

    # System definition
    # -----------------

    SYSTEM = ARMMAC

    # Main compilation setup
    # ----------------------

    CFLAGS += -g -ggdb -O0

    # Compilation flags
    # -----------------

    # CVM and IO related:

    IO_CPPFLAGS = -DUSECVMDB -DSCEC  -DPROCPERNODE=4000

    ifeq ($(SYSTEM), ARMMAC)
            MPI_DIR      = /opt/homebrew
            MPI_INCLUDE  = $(MPI_DIR)/include/openmpi/ompi/mpi/cxx
            CC           = $(MPI_DIR)/bin/mpicc
            CXX          = $(MPI_DIR)/bin/mpicxx
            LD           = $(MPI_DIR)/bin/mpicxx
            CXXFLAGS    += -DMPICH_IGNORE_CXX_SEEK
            CFLAGS      += -Wall -I/opt/homebrew/include/
            CPPFLAGS    += -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64
            LDFLAGS     += -L/opt/homebrew/lib/
    endif

    LDFLAGS += -lgslcblas
    LDFLAGS += -lgsl

Although there will be some warnings related to architecture issues, things will work as intended.